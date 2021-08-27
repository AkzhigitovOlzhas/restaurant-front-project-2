import React from "react";

export const ReviewsList = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <div className="mt-2 ms-1 mb-2 fs-5">Отзывов нет</div>
      ) : (
        <>
          <div className="fs-5 mt-3 fw-bold">Отзывы</div>
          <ul className="list-group list-group-flush">
            {data.map((item) => {
              return (
                <li className="list-group-item" key={item.id}>
                  <div className="d-flex flex-column ">
                    <div className="fw-bold text-black-50">
                      {item.user_name + " " + item.user_surname}
                    </div>
                    <div className="fw-normal">{item.body}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};
