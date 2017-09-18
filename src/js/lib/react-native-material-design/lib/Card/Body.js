import React, {Component, PropTypes} from "react";
import {StyleSheet, View} from "react-native";

export default class Body extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const { theme, children, style } = this.props;

		const cardBodyStyle = (() => {
			return [
				styles.container, style
			];
		})();

        return (
            <View style={ cardBodyStyle }>
                {children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 16
    }
});
