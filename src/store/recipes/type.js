import PropTypes from 'prop-types'

export default {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    recipe_name: PropTypes.string,
    ingredients: PropTypes.string,
    preparation: PropTypes.string,
    cooking_instructions: PropTypes.string,
    hack_needed: PropTypes.string,
    hack: PropTypes.string,
  }),
}