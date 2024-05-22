import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Owners</h2>
          <p>
          "Sntayew and Belaynesh have been running their construction materials shop, 'Hammer & Nail', for over 20 years. They started the business from scratch, with a small storefront and a handful of products. Today, their shop is a go-to destination for builders, contractors, and homeowners in the area, offering a wide range of drywall and roofing materials, as well as building accessories and hardware. John and Maria are proud of their reputation for providing top-notch products and expert advice to their customers. They take pride in being able to supply everything needed to complete a project, from start to finish."
          </p>
        </div>
        <div id="row">
  {props.data
    ? props.data.map((d, i) => (
        <div key={`${d.name}-${i}`} className="col-md-6 col-sm-12 team">
          <div className="thumbnail">
            {" "}
            <div className="row">
              <div className="col-md-6">
                <img src={d.img} alt="..." className="img-fluid w-100" />
              </div>
              <div className="col-md-6">
                <img src={d.img2} alt="..." className="img-fluid w-100" />
              </div>
            </div>
            <div className="caption">
  <div className="row">
    <div className="col-xs-12 col-md-8 col-lg-6">
      <h4>{d.name}</h4>
    </div>
  </div>
</div>
          </div>
        </div>
      ))
    : "loading"}
</div>
      </div>
    </div>
  );
};
