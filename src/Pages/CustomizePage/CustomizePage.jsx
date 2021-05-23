import React, { useState } from "react";
import Input from "../../Components/Input/input";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { BsSearch } from "react-icons/bs";
import { FiMoreHorizontal, FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import logo from "../../Assets/Images/clogo.png";
import AddPageModal from "../../Components/AddPageModal/AddPageModal";

import "./CustomizePage.scss";
import { withRouter } from "react-router";

const CustomizePage = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="customize-container">
      <div className="navbar-wrapper">
        <div className="top-line">
          <div className="left">
            <img src={logo} alt="logo" height="25px" width="35px" />
            <span>Page : &nbsp;</span>
            <DropDownList
              data={["Home", "About Us", "Contact Us", "FAQ"]}
              defaultValue={"Home"}
            />
          </div>
          <div className="left">
            <span className="save">Save</span>
            <div className="vl"></div>
            <span className="preview">Preview</span>
            <div className="vl"></div>
            <FiMoreHorizontal className="more" />
          </div>
        </div>
        <div className="bottom-line">
          <div className="left" onClick={() => props.history.goBack()}>
            <IoArrowBackCircleOutline />
            <span>Back</span>
          </div>
          <div className="left">
            <AiOutlineClose className="close" />
          </div>
        </div>
      </div>
      <div className="page-wrap">
        <div className="content-wrapper">
          <div className="box-1">
            <div className="pages-box">
              <div className="search-box">
                <div className="input-icon">
                  <BsSearch />
                  <Input
                    className="search-input"
                    placeholder={"Search in the list"}
                  />
                </div>
                <div className="close-icon">
                  <AiOutlineClose />
                </div>
              </div>
              <div className="page-list">
                <PanelBar>
                  <PanelBarItem title={"Data"} expanded={true}>
                    <PanelBarItem title={"Data Tables"}></PanelBarItem>
                    <PanelBarItem title={"Cards with charts"}></PanelBarItem>
                    <PanelBarItem title={"Cards with numbers"}></PanelBarItem>
                    <PanelBarItem title={"Calendar"}></PanelBarItem>
                    <PanelBarItem title={"Carousel"}></PanelBarItem>
                  </PanelBarItem>
                  <PanelBarItem title={"Visual Elements"} expanded={true}>
                    <PanelBarItem title={"Text"}></PanelBarItem>
                    <PanelBarItem title={"Button"}></PanelBarItem>
                    <PanelBarItem title={"Images"}></PanelBarItem>
                    <PanelBarItem title={"Alerts"}></PanelBarItem>
                    <PanelBarItem title={"Toasters"}></PanelBarItem>
                    <PanelBarItem title={"Accordian"}></PanelBarItem>
                    <PanelBarItem title={"Tabs"}></PanelBarItem>
                    <PanelBarItem title={"Tooltips"}></PanelBarItem>
                  </PanelBarItem>
                  <PanelBarItem title={"Navigation"} expanded={true}>
                    <PanelBarItem title={"Breadcrumb"}></PanelBarItem>
                    <PanelBarItem title={"Dropdown"}></PanelBarItem>
                    <PanelBarItem title={"Menu"}></PanelBarItem>
                    <PanelBarItem title={"Pagination"}></PanelBarItem>
                    <PanelBarItem title={"Steps"}></PanelBarItem>
                  </PanelBarItem>
                  <PanelBarItem title={"Feedback"} expanded={true}>
                    <PanelBarItem title={"Alert"}></PanelBarItem>
                    <PanelBarItem title={"Drawer"}></PanelBarItem>
                    <PanelBarItem title={"Modal"}></PanelBarItem>
                    <PanelBarItem title={"Popconfirm"}></PanelBarItem>
                    <PanelBarItem title={"Progress"}></PanelBarItem>
                    <PanelBarItem title={"Skeleton"}></PanelBarItem>
                  </PanelBarItem>
                </PanelBar>
              </div>
            </div>
          </div>
          <div className="box-2">
            {new Array(18).fill("null").map((_, index) => (
              <div className={`grid-item-${index}`}>
                <FiSettings className='setting' onClick={()=>setShowModal(true)} />
              </div>
            ))}
            {/* {[1, 2, 3].map((item) => (
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div className="col">
                    <FiSettings className='setting' onClick={()=>setShowModal(true)} />
                  </div>
                ))}
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <AddPageModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
};

export default withRouter(CustomizePage);
