import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  AppContent,
  ImgContainer,
  Heading,
  Image,
  EditorContainer,
  OptionsContainer,
  Option,
  TextArea,
  Button,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    textValue: ' ',
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  onChangeText = event => {
    this.setState({textValue: event.target.value})
  }

  render() {
    const {isBold, isItalic, isUnderline, textValue} = this.state
    return (
      <AppContainer>
        <AppContent>
          <ImgContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImgContainer>
          <EditorContainer>
            <OptionsContainer>
              <Option>
                <Button
                  type="button"
                  color={isBold ? '#faff00' : '#f1f5f9'}
                  data-testid="bold"
                  onClick={this.onClickBold}
                >
                  <VscBold size={20} />
                </Button>
              </Option>
              <Option>
                <Button
                  type="button"
                  color={isItalic ? '#faff00' : '#f1f5f9'}
                  data-testid="italic"
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={20} />
                </Button>
              </Option>
              <Option>
                <Button
                  type="button"
                  data-testid="underline"
                  color={isUnderline ? '#faff00' : '#f1f5f9'}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={20} />
                </Button>
              </Option>
            </OptionsContainer>
            <TextArea
              value={textValue}
              onChange={this.onChangeText}
              weight={isBold}
              fontDecor={isItalic}
              decoration={isUnderline}
            />
          </EditorContainer>
        </AppContent>
      </AppContainer>
    )
  }
}

export default TextEditor
