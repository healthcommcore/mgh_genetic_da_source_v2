import React from "react";
import { connect } from "react-redux";
import { initializeMenu } from "../actions";
import { graphql } from "gatsby";
import NavButton from "../components/nav-button";
import LargeHeader from "../components/large-header";
import Footer from "../components/footer";
import ContentContainer from "../components/content-container";
import { useDrupalMenu } from "../helpers/use-drupal-menu";
import { setHTML } from "../helpers";

const mapDispatchToProps = (dispatch) => {
  return {
    initializeMenu: (drupalMenu) => {
      dispatch( initializeMenu(drupalMenu) );
    }
  }
}

const Begin = ({ data, initializeMenu }) => {
  const drupalMenu = useDrupalMenu();
  const fields = data.nodeArticle;
  return (
    <div onLoad={ initializeMenu(drupalMenu) }>
      <LargeHeader />
      <ContentContainer>
        <div className="begin-end-content">
          { setHTML(fields.body.processed) }
        </div>
      </ContentContainer>
      <div className="prev-next-buttons fixed-bottom text-center begin-button-margin">
        <NavButton path="/how-to-use">Start</NavButton>
      </div>
      <Footer className="fixed-bottom" />
    </div>
  );
}

export const query = graphql`
  query BeginQuery {
    nodeArticle(drupal_internal__nid: {eq: 20} ) {
      title
      body {
        processed
      }
    }
  }
`
export default connect(null, mapDispatchToProps)(Begin);
