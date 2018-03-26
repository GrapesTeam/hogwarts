import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

function mapStateToProps(state) {
  const { lang, messages } = state.locale;
  return { locale: lang, messages, key: lang };
}

export default connect(mapStateToProps)(IntlProvider);
