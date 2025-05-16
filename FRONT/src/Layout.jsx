import Header from './components/header'

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className='p-10'>{children}</main>
        </div>
    )
}