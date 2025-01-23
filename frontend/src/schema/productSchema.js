import * as yup from 'yup';


export const productSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    price: yup.number().required("price is required").positive(),
    category: yup.string().required("category is required"),
    image: yup.string().url().required("image is required"),
   
  });