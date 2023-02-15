import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const newProduct = () => {
        useNavigate('/product/new')
    };

    return (
        <>
            <div className="container">
                <div className="products__list">
                    <div className="titlebar">
                        <div className="titlebar_item">
                            <h1>Products</h1>
                        </div>
                        <div className="titlebar_item">
                            <div className="btn">add Product</div>
                        </div>
                    </div>
                    <div className="table">
                        <div className="list_header">
                            <p>Image</p>
                            <p>Product</p>
                            <p>type</p>
                            <p>Inventory</p>
                            <p>actions</p>
                        </div>
                        <div className="list_items">
                            <img src="" alt="" height="40px" />
                            <a>product name</a>
                            <p>Category</p>
                            <p>50</p>
                            <div>
                                <button className="btn-icon success">
                                    <i className="fas fa-pencil-alt"></i>
                                </button>

                                <button className="btn-icon danger">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
