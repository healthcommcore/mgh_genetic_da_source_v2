import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import { getContent } from "../helpers";
import HideShowContentModule from "./hide-show-content-module";
import ContentModuleSegment from "./content-module-segment";

const mapStateToProps = (state) => {
  return {
    cancerType: state.user.cancerType
  }
}

const ContentModule = ({ content, cancerType }) => {
  let modules = content.field_content_module;
  let hideShowContent = [];
  if (modules.length > 0 && modules[0].field_module_title) {
    if (modules[1] && modules[1].relationships.hasOwnProperty("field_it_s_your_choice_label") &&
        modules[1].relationships["field_it_s_your_choice_label"]) {
      hideShowContent = modules.slice(1);
      modules = [JSON.parse(JSON.stringify(modules[0]))];
    }
    return (
      <>
        { modules.map( (module, i) => {
          const hasCancerName = module.relationships.field_cancer_type;
          let correctCancer = false;
          if (hasCancerName) {
            const cancerName = hasCancerName.name;
            correctCancer = (cancerName === cancerType);
          }
          const segments = module.relationships.field_content_segment;
          console.log(module, correctCancer);
          return (!hasCancerName || correctCancer) && (
            <Card key={ i } bsPrefix="card content-module">
              <Card.Body>
                <Card.Title>{ module.field_module_title }</Card.Title>
                { segments.map( (segment, j) => {
                  return (
                    <ContentModuleSegment 
                      key={ j }
                      segment={ segment }
                    />
                  );
                })}
              </Card.Body>
            </Card>
          );
        })}
        { hideShowContent.length > 0 && <HideShowContentModule pieces={ hideShowContent } /> }
      </>
    );// return
  } //if
  return <></>;
}

export default connect(mapStateToProps, null)(ContentModule);
