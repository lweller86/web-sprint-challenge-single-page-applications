import * as yup from 'yup';

const schema = yup.object().shape({
    username:yup
        .string()
        .trim()
        .required('A name is required for the order')
        .min(2, "name must be at least 2 characters"),
    pizzaType:yup
        .string()
        .oneOf(['Custom', 'Cheese', 'Pepperoni', 'BBQ chicken' ])
        .required('Please choose a pizza to start'),
    cheese:yup
    .boolean(),
    extraCheese:yup
    .boolean(),
    pepperoni:yup
    .boolean(),
    onions:yup
    .boolean(),
    specialText:yup
    .string(),
    
})
export default schema


