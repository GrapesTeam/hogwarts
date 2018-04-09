import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Menu, { MenuItem } from 'italki-ui/Menu';

class Header extends PureComponent {
  languages = [
    { value: 'en', name: 'English' },
    { value: 'zh-Hans', name: '中文简体' },
    { value: 'zh-Hant', name: '中文繁體' },
    { value: 'es', name: 'Español' },
    { value: 'fr', name: 'Français' },
    { value: 'pt', name: 'Português' },
    { value: 'de', name: 'Deutsch' },
    { value: 'ja', name: '日本語' },
    { value: 'ko', name: '한국어' },
    { value: 'it', name: 'Italiano' },
    { value: 'ru', name: 'Русский' },
    { value: 'ar', name: 'اللغة العربية' },
    { value: 'cs', name: 'Čeština' },
    { value: 'nl', name: 'Nederlands' },
    { value: 'eo', name: 'Esperanto' },
    { value: 'pl', name: 'Polski' },
    { value: 'th', name: 'ไทย' },
    { value: 'tr', name: 'Türkçe' },
    { value: 'vi', name: 'Tiếng Việt' },
  ];

  static propTypes = {
    isLogin: PropTypes.bool,
    lang: PropTypes.string,
    switchLan: PropTypes.func,
  };

  handleChange = () => {
    this.props.switchLan(this.selectInstance.value);
  };

  render() {
    const { isLogin, lang } = this.props;

    return (
      <header>
        <NavLink exact to="/">
          home
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/teachers">teachers page</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/landing">Landing</NavLink>
        &nbsp;|&nbsp;
        {isLogin ? (
          <NavLink to="/logout">logout</NavLink>
        ) : (
          <NavLink to="/login">login</NavLink>
        )}
        &nbsp;|&nbsp;
        {isLogin ? (
          <NavLink to="/logout">logout</NavLink>
        ) : (
          <NavLink to="/signup">sign up</NavLink>
        )}
        &nbsp;|&nbsp;
        <NavLink to="/profile">Profile</NavLink>
        &nbsp;|&nbsp;
        <select
          defaultValue={lang}
          onChange={this.handleChange}
          ref={instance => (this.selectInstance = instance)}>
          {this.languages.map((l, i) => (
            <option key={i} value={l.value}>
              {l.name}
            </option>
          ))}
        </select>
        <hr />
        <FormattedMessage id="AS" defaultMessage="Hello Michael Hsu!" />
      </header>
    );
  }
}

export default Header;
