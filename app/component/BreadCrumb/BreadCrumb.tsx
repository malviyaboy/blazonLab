import React from "react";

type BreadCrumbProps = {
  title:string;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({title}) => {
  return (
       <section>
        <div className="RequestPage breadPadd-x sm:px-4">
          <div>
            <h1 className="text-2xl font-bold px-3">{title}</h1>
          </div>
        </div>
      </section>
  );
};

export default BreadCrumb;


