import Layout from "../../layout";

export default function Admin() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-8">Admin</h1>
            <a href="/admin/add-product">
                <button className="bg-gray-900 text-white p-2 rounded transition">
                    Add new product
                </button>
            </a>
        </Layout>
    )
}