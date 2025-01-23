import React from 'react';

const ContributingPage = () => {
  return (
    <div>
      <h2>Detailed Steps for Contributing through Github.com</h2>
      <ol>
        <li>
          After clicking on the EDIT THIS PAGE icon{' '}
          <img src="/img/edit-this-page-icon.png" alt="edit-this-page" />
        </li>
        <li>
          Fork the repository to your github account<br />
          <a href="/img/first-fork-change-large.png" target="_blank">
            <img src="/img/first-fork-change-small.png" alt="forking" />
          </a>
        </li>
        <li>
          Make your changes<br />
          <a href="/img/first-editing-page-large.png" target="_blank">
            <img src="/img/first-editing-page-small.png" alt="first-editing-page" />
          </a>
        </li>
        <li>
          Create a new Pull Request, first<br />
          <a href="/img/first-creating-pull-request-large.png" target="_blank">
            <img src="/img/first-creating-pull-request-small.png" alt="first-creating-pull-request" />
          </a>
          <br />and then<br /><br />
          <a href="/img/first-creating-pull-request2-large.png" target="_blank">
            <img src="/img/first-creating-pull-request2-small.png" alt="first-creating-pull-request2" />
          </a>
        </li>
        <li>
          You have completed your pull request. Congrats!<br />
          <a href="/img/completed-pull-request-large.png" target="_blank">
            <img src="/img/completed-pull-request-small.png" alt="completed-pull-request" />
          </a>
        </li>
      </ol>

      <h2>Github References to Learn a Bit More</h2>
      <ul>
        <li><a href="https://guides.github.com/introduction/flow/" target="_blank">Workflow</a></li>
        <li><a href="https://help.github.com/articles/create-a-repo/" target="_blank">Repository</a></li>
        <li><a href="https://guides.github.com/activities/forking/" target="_blank">Fork</a></li>
        <li><a href="https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/" target="_blank">Branch</a></li>
        <li><a href="https://help.github.com/articles/about-pull-requests/" target="_blank">Pull Request</a></li>
        <li><a href="https://guides.github.com/features/issues/" target="_blank">Issue</a></li>
      </ul>
    </div>
  );
};

export default ContributingPage; 