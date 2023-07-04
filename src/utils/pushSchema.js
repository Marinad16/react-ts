import * as yup from "yup";

export const FormSchema = yup.object().shape({
    title: yup.string().required("Please enter a title").max(50).typeError("Please enter less than 50"),
    push_title: yup.string().required("Please enter a push_title").max(50).typeError("Please enter less than 50"),
    push_text: yup.string().required("Please enter a push_text").max(150).typeError("Please enter less than 150"),
    push_icon: yup.string(),
    push_image: yup.string(),
    push_lang:  yup.object().shape({
        name: yup.string(),
        value: yup.string(),
    }),
    push_type: yup.array()
        .of(
            yup.object().shape({
                date: yup.date(),
                time: yup.string(),
            })
        ),
    aud: yup.array()
        .of(
            yup.object().shape({
                name: yup.string(),
                value: yup.string(),
            })
        ),
    segmentation: yup.array()
        .of(
            yup.object().shape({
                name: yup.string(),
                action1: yup.string(),
                action2: yup.string(),
                amount: yup.number(),
            })
        ),
});
