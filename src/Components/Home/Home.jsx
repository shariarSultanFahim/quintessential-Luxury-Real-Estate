import useDocumentTitle from "../../CustomHook/useDocumentTitle"




const Home = () => {
    useDocumentTitle('Home')    

    return (
        <div className="container mx-auto min-h-screen">
            <h1 className="animate__animated animate__backInLeft">This is Home</h1>
        </div>
    );
};

export default Home;