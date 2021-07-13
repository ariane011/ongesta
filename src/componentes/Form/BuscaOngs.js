import React from "react";
import { Field, Formik, FormikProps } from "formik";
import { Form, Button, Row } from "antd";

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

export const BuscaOngs = () => (
  <div>
    <Formik
      initialValues={{ email: "", color: "red", firstName: "", lastName: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Row>
            <Field as="select" name="color">
              <option value="default">Selecione seu estado</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
            </Field>
          </Row>
          <Row>
            <Field as="select" name="color">
              <option value="default">Selecione sua cidade</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
            </Field>
          </Row>
          <Row>
            <Field
              name="lastName"
              placeholder="Ongs mais próximas"
              component={MyInput}
            />
          </Row>
          <Row>
            <Button type="submit">Procurar ONG</Button>
          </Row>
        </Form>
      )}
    </Formik>
  </div>
);
