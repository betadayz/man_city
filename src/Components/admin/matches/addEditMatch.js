import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';
import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

export default class AddEditMatch extends Component {

  state = {
    matchId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    teams: [],
    formdata: {
      formError:false,
        formSuccess: '',
        formdata:{
            date:{
                element:'input',
                value:'',
                config:{
                    label: 'Event date',
                    name:'date_input',
                    type: 'date'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
    },
  }
  };

  render() {
    return (
      <AdminLayout>
                    <FormField
                      id={'date'}
                      formdata={this.state.formdata.formdata.date}
                      change={(element) => this.updateForm(element)}
                    />

      </AdminLayout>
    );
  }
}
