const Home = () => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-md-6">
                        <div className="card-body border bg-light my-5">
                    <h2 className=" card-title text-center">The Studio Ghibli Encyclopedia</h2>
                    <p className="card-text text-center h-100">Insert history of Studio Ghibli Films Here.</p>
                    <p className="card-subtitle text-muted text-center my-1"><a href="https://ghibliapi.herokuapp.com/" target="_blank">Studio Ghibli API</a></p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;