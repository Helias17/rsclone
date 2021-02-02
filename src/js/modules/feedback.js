import { sendMailToAdmin } from './users';
import prepareData from './prepareFormData';

export default () => {
  const feedbackForm = document.querySelector('#feedback-form');
  feedbackForm.onsubmit = async (event) => {
    console.log('feedback submit');
    // stop our form submission from refreshing the page
    event.preventDefault();
    const data = prepareData(feedbackForm);
    sendMailToAdmin(data)
      .then(() => alert('Email is send!'))
      .catch((err) => {
        console.log((err));
        console.log('Error send feedback');
      });
  };
};
