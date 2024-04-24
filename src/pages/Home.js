import useFetch from "../hooks/useFetch";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';


function Home() {

    let url = 'http://localhost:3001/blogs';
    let {data : blogs, loading, error} = useFetch(url);

  return (
   <div className="container mt-3">
        <div className="row">
            { error && <div> {error} </div> }
            { loading && <div> loading...</div> }
            { blogs && blogs.map(blog=>(
                <div key={blog.id} className="col-md-12 mb-3">
                    <div className="card p-2">
                        <div className="card-body">
                            <h3 className="card-title">{blog.title}</h3>
                            <h6>posted by - {blog.author}</h6>
                            <a className="btn btn-primary btn-sm d-inline" href="">Read More</a>
                        </div>
                    </div>
                </div>
            )) }
        </div>
   </div>
  );
}

export default Home;
