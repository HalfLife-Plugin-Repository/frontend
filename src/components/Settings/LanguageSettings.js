import React, {Component} from 'react';
import Button from 'components/Button';
import Flex from 'components/Flex';
import phrases, {languages} from 'lang';
import {common} from 'styles';

class LanguageSettings extends Component {
    state = {
        lang: localStorage.getItem('localization') || ''
    };

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({lang: e.target.value});
    };

    handleClick = () => {
        localStorage.setItem('localization', this.state.lang);
        window.location.reload();
    };

    render(){
        const {
            lang
        } = this.state;
        return (
            <div style={common.form}>
                <select
                    onChange={this.handleChange}
                    value={lang}>
                    {languages.map((language, index) =>
                        <option value={language.value}>
                            {language.option}
                        </option>
                    )}
                </select>
                <Flex
                    align="center"
                    justify="flex-end"
                    style={common.formActions}>
                    <Button
                        onClick={this.handleClick}
                        label={phrases.update}/>
                </Flex>
            </div>
        );
    }
}


export default LanguageSettings;
