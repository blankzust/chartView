import React, { Component } from "react";
import PropTypes from "prop-types"
import Config from "modules/charts/config"
import Form from "components/Form"
import ChartOptionSettingItem from "../components/ChartOptionSettingItem"
import BaseSetting from "./baseSetting"

class StyleSetting extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    activeWidgetId: PropTypes.object,
    widget: PropTypes.object
  }

  constructor(props) {
    super();
  }


  render() {
    const { widget, activeWidgetId, dispatch } = this.props
    const styleConfig = Config.getConfig(widget.type)
    return <div className="style-setting">
      <ChartOptionSettingItem key={"base-config"} title={"基础配置"}>
        <BaseSetting widget={widget} activeWidgetId={activeWidgetId} dispatch={dispatch} />
      </ChartOptionSettingItem>
      {
        styleConfig.map((config, index) => {
          return (
            <ChartOptionSettingItem key={config.type} title={config.title}>
              <Form {...config} key={index} />
            </ChartOptionSettingItem>
          )
        })
      }
    </div>;
  }
}

export default StyleSetting;
