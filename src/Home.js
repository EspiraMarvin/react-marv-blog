import BlogList from './BlogList'
import useFetch from './hook/useFetch';

const Home = () => {
// let name = 'Mario'
//  const [name, setName] = useState('Mario');

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');


    return (
        <div className="home">
            { error && <div> { error }</div>}
            { isPending && <div> Loading... </div> }
            { blogs && <BlogList  blogs={blogs} title='All Blogs!' /> }
        {/* <BlogList  blogs={blogs.filter((blog) => blog.author === 'marvin')} title="Marvin's Blogs!"/> */}
        </div>
     );
};

export default Home;
