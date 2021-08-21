const topics = document.interestForm.topics;
const limitChecked = (j) => {
  var totalTopics = 0;
  for (i = 0; i < topics.length; i++) {
    if (topics[i].checked) {
      totalTopics++;
    }
  }

  if (totalTopics > 3) {
    alert("Please select three topics only!");
    topics[j].checked = false;
  }
};

const interests_form = document.getElementById("interests-form");
interests_form.addEventListener("submit", interests);
async function interests(event) {
  event.preventDefault();
  console.log(topics);
  var query = 0;
  const URL = `something.com/api/?key=s;flkjsdlkjksdfjkddjfeiwienisos&q=${query}`;
  const result = await fetch(URL);
}
