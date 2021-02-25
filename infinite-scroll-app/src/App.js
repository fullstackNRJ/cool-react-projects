import { useState, useEffect, useRef } from "react";
import "./App.css";
import ImageGrid from "./components";
import ScrollArrow from './components/ScrollToTop/index';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const images = await (
        await fetch(`https://picsum.photos/v2/list?page=${page}`)
      ).json();
      setItems((prevItems) => prevItems.concat(images));
      setLoading(false);
      console.log(items);
    };
    fetchImages();
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    const currentDOM = loader.current;
    if (currentDOM) {
      observer.observe(currentDOM); // hooking up ref to loader for observation
    }

    /* return () => {
      observer.unobserve(currentDOM);
    }; */
  }, []);

  const handleObserver = (entities) => {
    console.log({ entities });
    const targetElement = entities[0];
    if (targetElement.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  return (
    <div className="App">
      <ScrollArrow/>
      <header className="App-header">Infinite Scroll Photo Gallery</header>
      {loading && <h4>Fetching Images</h4>}
      <ImageGrid data={items} />
      <h3 className="loading" ref={loader}>
        Loading more ....
      </h3>
    </div>
  );
}

export default App;
