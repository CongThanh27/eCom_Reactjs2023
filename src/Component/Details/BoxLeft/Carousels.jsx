export default function Carousels({data}) {
    const contentStyle = {
        magin: '0 auto',
        color: '#fff',
      };
      var imgArr = data?.image?.data?.map((item, index) => {
        return (                     
            <div style={contentStyle} class="carousel-item" data-bs-interval="2000">
            <img style={contentStyle} src={`https://backoffice.nodemy.vn${item.attributes.url}`} class="d-block w-100" alt="..."/>
            </div>
       )
})
      return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div style={contentStyle} class="carousel-item active" data-bs-interval="2000">
            <img style={contentStyle} src={`https://backoffice.nodemy.vn${data?.image?.data[0].attributes.url}`} class="d-block w-100" alt="..."/>
          </div>
            {imgArr}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      );
}