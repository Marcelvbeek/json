import { connect } from 'react-redux';
import { Search } from '../../../actions/questiontree';
import SearchBox from './search-box.component';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = dispatch => {
  return {
    search: query => {
      dispatch(
        Search(query)
      )
    }
  }
}

const SearchBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox)

export default SearchBoxContainer;
