import PropTypes from 'prop-types'

export default {
  status: PropTypes.shape({
    id: PropTypes.number,
    dish_name: PropTypes.string,
    hack_request: PropTypes.string,
    ingredients: PropTypes.string,
    directions: PropTypes.string,
  }),
}