import useDocumentTitle from "../../CustomHook/useDocumentTitle"

const Home = () => {
    useDocumentTitle('Home')    

    return (
        <div className="container mx-auto min-h-screen">
            This is home
        </div>
    );
};

export default Home;