import fireLoader from './fireLoader.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={fireLoader} alt='fireLoader'/>
            <h2>Loading ...</h2>
        </div>
    )
}

export default Loader;