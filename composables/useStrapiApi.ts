import { ProductResponse, MetaResponse} from '@/types/product'

export default() => {

    // get strapi url from runtime config
    const config = useRuntimeConfig()
    const STRAPI_URL: string = config.strapi.url

    // get token from cookie
    const token = useCookie('token')

    // headers for strapi api
    const headers = {
        'Accept': 'application/json',
        "Authorization": `Bearer ${token.value}`
    }

    // const get = async <T>(endpoint: string) => {
    //     return useFetch<T>(`${STRAPI_URL}/${endpoint}?populate=*`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authorization": `Bearer ${token.value}`
    //         },
    //         cache: 'no-cache',
    //     })
    // }

    // Get All Categories
    const getCategories = async () => {
        return useFetch(`${STRAPI_URL}/categories?sort[0]=id%3Adesc&populate=*`, {
            method: 'GET',
            headers: headers,
            cache: 'no-cache',
        })
    }

    // Get All Products
    const getProducts = async (page: number, pagesize: number) => {
        return useFetch<ProductResponse & MetaResponse>(`${STRAPI_URL}/products?sort[0]=id%3Adesc&pagination[page]=${page}&pagination[pageSize]=${pagesize}&populate=*`, {
            method: 'GET',
            headers: headers,
            cache: 'no-cache',
        })
    }

    // Get Products by id
    const getProductById = async (id: number) => {
        return useFetch(`${STRAPI_URL}/products/${id}?populate=*`, {
            method: 'GET',
            headers: headers,
            cache: 'no-cache',
        })
    }

    // Create Product
    const createProduct = async (product: any) => {
        // http://localhost:1337/api/products
        return useFetch(`${STRAPI_URL}/products`, {
            method: 'POST',
            body: product,
            headers: headers,
            cache: 'no-cache',
        })
    }

    // Update Product
    const updateProduct = async (id: number, product: any) => {
        return useFetch(`${STRAPI_URL}/products/${id}`, {
            method: 'PUT',
            body: product,
            headers: headers,
            cache: 'no-cache',
        })
    }

    // Delete Product
    const deleteProduct = async (id: number) => {
        return useFetch(`${STRAPI_URL}/products/${id}`, {
            method: 'DELETE',
            headers: headers,
            cache: 'no-cache',
        })
    }

    return {
        getCategories,
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct
    }

}