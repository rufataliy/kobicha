import React from "react";
import styled from "styled-components";
import { Button, Input, SectionTitle, Wrapper } from "./commons";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & h2 {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }
  & > div {
    width: 50%;
    flex-shrink: 0;
    margin-bottom: ${({ theme }) => theme.gaps.lg};
  }
  & > div:last-child {
    width: 100%;
  }
  & .address table {
    width: 100%;
    height: 70%;
  }
  & .message-form {
    & .btn-group {
      width: 100%;
      display: flex;
      justify-content: space-between;
      & button {
        width: 48%;
      }
    }
  }

  & th {
    text-align: left;
  }
  & td {
    text-align: right;
  }
  & td,
  & th {
    padding: 10px;
    width: 50%;
    border-bottom: 1px solid grey;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
    & .text-content {
      width: 85%;
      background: white;
      margin: 0 auto;
      margin-top: -5%;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & th {
      text-align: right;
    }
    & td {
      text-align: left;
    }
    & td,
    & th {
      border: none;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
    & > div {
      width: 50%;
    }
    & .text-content {
      width: 50%;
      background: white;
      margin: 0 auto;
      margin-top: 0;
    }
  }
`;

interface Props {
  data: Data["contact"];
}

const formatLabel = (raw: string) => {
  const strArr = raw.split("");
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join("").replace("_", " ");
};

export const Contact: React.FC<Props> = ({ data }) => {
  const labels = Object.keys(data);
  return (
    <Wrapper>
      <SectionTitle>
        <h1>Contact us</h1>
      </SectionTitle>
      <Container id="contact">
        <div className="address">
          <h2>Details</h2>
          <table>
            {labels.map((label) => {
              return (
                <tr>
                  <th>{formatLabel(label)}</th>
                  <td>{data[label]}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="message-form">
          <h2>Email us</h2>
          <Input label="Name" type="input" />
          <Input label="Email" type="input" />
          <Input label="Message" type="textarea" />
          <div className="btn-group">
            <Button btnType="secondary">Reset</Button>
            <Button btnType="primary">Send</Button>
          </div>
        </div>
        <div className="map-section">
          <h2>Find us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22406.926131588356!2d-75.7041578045148!3d45.421247654765494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1607283081996!5m2!1sen!2sca"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </Container>
    </Wrapper>
  );
};
