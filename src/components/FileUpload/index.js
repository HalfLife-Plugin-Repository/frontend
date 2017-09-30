import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Flex from 'components/Flex';

const style = {
    image: {
        marginBottom: 10
    },
    button: {
        position: 'relative',
        overflow: 'hidden'
    },
    fileInput: {
        cursor: 'inherit',
        display: 'block',
        opacity: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        minHeight: '100%',
        minWidth: '100%'
    }
};

class FileUpload extends Component {
    static propTypes = {
        image: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    handleChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.props.onChange(reader.result);
        };
    };

    render(){
        const {
            image
        } = this.props;
        return (
            <Flex
                align="center"
                justify="center"
                column={true}>
                <Avatar
                    alt="Preview"
                    circular={false}
                    size={150}
                    src={image}
                    style={style.image}/>
                <Button
                    label="Upload new Picture"
                    style={style.button}>
                    <input
                        onChange={this.handleChange}
                        type="file"
                        style={style.fileInput}/>
                </Button>
            </Flex>
        )
    }
}

export default FileUpload;