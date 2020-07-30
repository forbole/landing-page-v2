import React from "react";
import { Modal } from "semantic-ui-react";
import { TermsOfServiceCSS } from "./styles";

const TermsOfService = (props: any) => {
  const { trigger } = props;
  return (
    <Modal trigger={trigger} closeIcon>
      <Modal.Content>
        <TermsOfServiceCSS>
          <h3>Terms of Service</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
            est turpis, ut mattis turpis semper a. Curabitur massa dolor,
            gravida at viverra sed, malesuada et massa. Phasellus efficitur
            euismod turpis sed accumsan. Nam interdum tellus ex, sed fringilla
            justo varius iaculis. Cras tincidunt rutrum tortor, nec rhoncus
            mauris lacinia vel. Curabitur ac nisl libero. Nam sit amet semper
            elit. Cras maximus felis non pretium pharetra. Etiam euismod
            convallis orci, nec eleifend velit rhoncus sed. In hac habitasse
            platea dictumst. Duis luctus in odio at ullamcorper. Pellentesque
            sodales eleifend urna sed finibus. Ut vitae eleifend sapien. Nullam
            pulvinar nec nibh eget mollis. Etiam vitae neque nibh.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc congue est turpis,
            ut mattis turpis semper a. Curabitur massa dolor, gravida at viverra
            sed, malesuada et massa. Phasellus efficitur euismod turpis sed
            accumsan. Nam interdum tellus ex, sed fringilla justo varius
            iaculis. Cras tincidunt rutrum tortor, nec rhoncus mauris lacinia
            vel. Curabitur ac nisl libero. Nam sit amet semper elit. Cras
            maximus felis non pretium pharetra. Etiam euismod convallis orci,
            nec eleifend velit rhoncus sed. In hac habitasse platea dictumst.
            Duis luctus in odio at ullamcorper. Pellentesque sodales eleifend
            urna sed finibus. Ut vitae eleifend sapien. Nullam pulvinar nec nibh
            eget mollis. Etiam vitae neque nibh.
          </p>
        </TermsOfServiceCSS>
      </Modal.Content>
    </Modal>
  );
};

export default TermsOfService;
