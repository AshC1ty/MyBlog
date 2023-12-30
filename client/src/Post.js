export default function Post(){
    return(
        <div className="post">
        <div className="image">
          <img src="https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg"></img>
        </div>
        <div className="texts">
          <h2>Beautiful Images of Nature</h2>
          <p className="info">
            <a className="author">Akash Babu</a>
            <time>2023-12-29</time>
          </p>
          <p className="summary">Sample Description here</p>   
        </div>
      </div>
    );
}