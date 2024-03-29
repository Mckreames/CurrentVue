import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function TermsOfService() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="terms-page">
      <p className="terms-link" onClick={toggle}>
        Term of Service
      </p>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Terms of Service</ModalHeader>
        <ModalBody>
        <h1>CurrentVue App Terms of Service</h1>
        <p>Effective Date: [Date]</p>

        <p>Welcome to CurrentVue, a weather application that also provides news updates for some areas. Please read these terms carefully before using our services.</p>

        <h2>Acceptance of Terms</h2>
        <p>By using the CurrentVue app, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the App.</p>

        <h2>Use of Services</h2>
        <p>Content: The App provides weather information and news updates. The content displayed is for informational purposes only, and CurrentVue does not guarantee the accuracy or completeness of the information.</p>

        <h2>User Conduct</h2>
        <p>You agree not to engage in any activity that may interfere with or disrupt the functionality of the App. Additionally, you must comply with all applicable laws and regulations.</p>

        <h2>Privacy</h2>
        <p>Our Privacy Policy explains how we collect, use, and protect your information when you use the App. We won't sell your information unless they offer us a decent amount of money. "Decent" meaning a crisp $20 bill or greater</p>

        <h2>Intellectual Property</h2>
        <p>Ownership: The App and its content are owned by William Butler. You may not reproduce, distribute, or create derivative works without our express written permission or WE. WILL. FIND. YOU.</p>

        <p>Trademarks: CurrentVue, the CurrentVue logo, and other marks used within the App may be trademarked at some point in the future. You may not use these trademarks without our prior written consent.</p>

        <h2>Disclaimer of Warranties</h2>
        <p>The App is provided "as is" without any warranties, expressed or implied. CurrentVue disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</p>

        <h2>Limitation of Liability</h2>
        <p>CurrentVue shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, wheher incurred directly or indirectly.</p>

        <h2>Changes to Terms</h2>
        <p>CurrentVue reserves the right to update or modify these Terms of Service at any time. We will notify users of significant changes, but it is your responsibility to regularly review the terms.</p>

        <h2>Contact Information</h2>
        <p>If you have any questions or concerns regarding these Terms of Service, please make a handwritten note that is legible and neat, then proceed to shove it up your butt.</p>

        <p>Thank you for using CurrentVue!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}