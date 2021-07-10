import React, { useState } from "react";
import "../Css/App.css";
import MenuItem from "./MenuItem";


const GallaryReact = () => {
    const [items, setItems] = useState(MenuItem);

    const filterItem = (categItem) => {
        const updateItem = MenuItem.filter((currItem) => {
            return currItem.category === categItem;
        });
        setItems(updateItem);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading animate__heartBeat" > Rj Online Food </h1>
            <hr />
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterItem('breakfast')}> breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItem('evening')}>lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem('lunch')}>evening</button>
                    <button className="btn btn-warning" onClick={() => filterItem('dinner')}>dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(MenuItem)}>all</button>
                </div>
            </div>
            {/* my main item section */}
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 max-auto">
                        <div className="row my-5">
                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem;

                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <div className="row Item-inside">

                                                {/* for item images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt="menuPic" className="img-fluid" />
                                                </div>

                                                {/* menu item description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>Khao to Maja aayega</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between">
                                                            <h2>{price}</h2>
                                                            <a href="">
                                                                <button className="btn btn-primary"> Order Now</button>
                                                            </a>
                                                        </div>
                                                        <p>*Price may very on selected date.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    );
                                })

                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}
export default GallaryReact;