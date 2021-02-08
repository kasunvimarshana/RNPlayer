import React, { Component } from 'react';
import { 
    StyleSheet, 
    StatusBar 
} from 'react-native';
import { connect } from 'react-redux';
import {
    Container, 
    Header, 
    Content, 
    Title,
    Card,
    CardItem,
    Body,
    Form,
    Item,
    Label,
    Input,
    Textarea,
    Button,
    Text,
    Icon,
    Spinner
} from 'native-base';

import { startLoading, stopLoading } from '../../Store/Actions/UIAction';

class AddVideoScreen extends Component {

    state = {};

    constructor( props ) {
        super( props );
        this.state = {};
        this.setState((prevState) => {
            return {
                ...prevState,
                isLoading: false
            }
        });
        this.inputVideoURI = React.createRef();
        this.inputTitle = React.createRef();
        this.inputDescription = React.createRef();
        this.inputSave = React.createRef();

        const [videoURIValue, videoURIOnChange] = React.useState('Default Placeholder');
        const [titleValue, titleOnChange] = React.useState('Default Placeholder');
        const [descriptionValue, descriptionOnChange] = React.useState('Default Placeholder');
    }

    render() {
        return(
            /*
            <SafeAreaView style={styles.container}>
                <Text>Title</Text>
            </SafeAreaView>
            */
            <Container>
                <Header>
                    <Title> Add New Video </Title>
                </Header>

                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Form>
                                    <Item floatingLabel rounded>
                                        <Label> Video URL </Label>
                                        <Input 
                                            placeholder="Video URL" 
                                            ref={(ref) => this.inputVideoURI = ref}
                                            value = {videoURIValue}
                                            onChangeText={videoURIOnChange}
                                            //onBlur={}
                                            //onFocus={}
                                            //style={}
                                            //onSubmitEditing={}
                                            //onEndEditing={}
                                        />
                                    </Item>
                                    <Item floatingLabel rounded>
                                        <Label> Title </Label>
                                        <Input 
                                            placeholder="Title"
                                            ref={(ref) => this.inputTitle = ref}
                                            value = {titleValue}
                                            onChangeText={titleOnChange}
                                            //onBlur={}
                                            //onFocus={}
                                            //style={}
                                            //onSubmitEditing={}
                                            //onEndEditing={}
                                        />
                                    </Item>
                                    <Item floatingLabel rounded>
                                        <Label> Description </Label>
                                        <Textarea 
                                            rowSpan={5} 
                                            bordered 
                                            placeholder="Description" 
                                            ref={(ref) => this.inputDescription = ref}
                                            value = {descriptionValue}
                                            onChangeText={descriptionOnChange}
                                            //onBlur={}
                                            //onFocus={}
                                            //style={}
                                            //onSubmitEditing={}
                                            //onEndEditing={}
                                        />
                                    </Item>
                                    <Item floatingLabel rounded>
                                        <Button 
                                            block 
                                            rounded 
                                            iconLeft
                                            ref={(ref) => this.inputSave = ref}
                                        >
                                            <Icon name='save' />
                                            <Text> Save </Text>
                                        </Button>
                                    </Item>
                                </Form>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }

}

/*
import React from 'react';
import { TextInput } from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        isLoading: state.ui.isLoading
    };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
    // Action
    return {
        // startLoading
        ui_StartLoading: ( payload = {} ) => dispatch(startLoading( payload )),
        // stopLoading
        ui_StopLoading: ( payload = {} ) => dispatch(stopLoading( payload ))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVideoScreen);