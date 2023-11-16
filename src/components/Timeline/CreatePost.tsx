import { useEffect, useState,useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button, Form, Input, Select, Steps } from "antd";
import "./CreatePost.css";
import Bigimage from "../../Images/Donation-image-removebg-preview.png";





const { TextArea } = Input;

const supabase = createClient(
  "https://pjqbnzerwqygskkretxd.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE"
);

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [writter_name, setWritter_name] = useState("");
  const [discription, setDiscription] = useState("");
  const [reacts, setReacts] = useState(0);
  const [createDate, setCreateDate] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [stepsValue, setStepsValue] = useState(0);


  

  useEffect(() => {
    const nowdate = new Date().toISOString().slice(0, 10);
    setCreateDate(nowdate);
  }, []);

  const handleSubmit = async () => {
    const { data, error } = await supabase.from("Timeline").insert([
      {
        title,
        writter_name,
        discription,
        reacts,
        createDate,
        type,
        location,
      },
    ]);
    console.log(data, error);
  };

  useEffect(() => {
    processSteps();
    console.log(stepsValue);
  }, [title, location, discription, reacts]);

  function processSteps() {
    if (title.length > 1) {
      setStepsValue(1);
    }
    if (location.length > 1 && title.length > 1) {
      setStepsValue(2);
    }

    if (discription.length > 1 && location.length > 1 && title.length > 1) {
      setStepsValue(3);
    }

    if (
      reacts >= 1 &&
      discription.length > 1 &&
      location.length > 1 &&
      title.length > 1
    ) {
      setStepsValue(5);
    }
  }

  const myDiv = useRef<HTMLDivElement>(null);
  const FoucstoForm = () => {
    if (myDiv.current) {
      myDiv.current.scrollIntoView({ behavior: 'smooth',  });
    }
  };




  return (
    <div>
      
      <div className="HeaderContainer">
        <div className="Header">
          <h2 className="MainHead" style={{ color: "#005580" }}>Be the Reason</h2>
          <h2 className="subtxt" style={{ fontSize: "xx-large", color: "#e67300" }}>
            Someone will Smiles Tomorrow !
          </h2>
          <p style={{fontSize:"14px",paddingTop:"30px"}}>
            Every event you create is a beacon of hope, illuminating the path to
            joy and happiness in someone’s life. Whether it’s a charity run, a
            community clean-up, or a fundraising dinner, your event can make a
            significant difference. Each event is a unique tapestry of change,
            woven with threads of hope and compassion. They are platforms for
            voices to be heard, dreams to be shared, and lives to be
            transformed. They are catalysts that set in motion ripples of
            positive change. So, go ahead and create your event. Ignite the
            spark of change. Be the sculptor of joy and architect of happiness
            in someone’s life. Remember, every big change starts with a small
            step. And your event could be the first step on someone’s journey
            towards a brighter, happier tomorrow.
          </p>

          <Button type="primary" onClick={FoucstoForm}>Let's  get start</Button>
        </div>

        <div className="Bigimage">
          <img className="bigLogoImage" src={Bigimage} alt="Help us to build the child world !" />
        </div>
      </div>

      <div className="FormStyle" tabIndex={-1} ref={myDiv}>
        <Form layout="vertical" className="FormItself">
          <Form.Item label="Title">
            <Input
              placeholder="Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Form.Item>

          <Form.Item label="Writter Name">
            <Input
              placeholder="Writter Name"
              onChange={(event) => {
                setWritter_name(event.target.value);
              }}
            />
          </Form.Item>

          <Form.Item label="Event Location">
            <Input
              placeholder="Where is Your Event Taking Place ? "
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
          </Form.Item>

          <Form.Item label="Discription">
            <TextArea
              onChange={(event) => {
                setDiscription(event.target.value);
              }}
              rows={4}
              placeholder="max Length is 300 words"
              maxLength={700}
            />
          </Form.Item>

          <Form.Item label="Reacts">
            <Input
              placeholder="Reacts"
              onChange={(event) => {
                setReacts(parseInt(event.target.value));
              }}
            />
          </Form.Item>

          <Form.Item label="Create Date">
            <Input
              type="date"
              value={createDate}
              placeholder="Create Date"
              onChange={(event) => {
                setCreateDate(event.target.value);
              }}
            />
          </Form.Item>

          <Form.Item label="Donation Type">
            <Select
              defaultValue="Undefined"
              style={{ display: "flex", width: 300, textAlign: "left" }}
              onChange={(value) => {
                setType(value);
              }}
              options={[
                {
                  value: "Scholarships and Financial Aid",
                  label: "Scholarships and Financial Aid",
                },
                {
                  value: "Food and Equipment",
                  label: "Food and Equipment",
                },
                {
                  value: "Infrastructure Development",
                  label: "Infrastructure Development",
                },
                {
                  value: "Specialized Programs",
                  label: "Specialized Programs",
                },
                {
                  value: "Educational Materials",
                  label: "Educational Materials",
                },
                {
                  value: "Tech For Education",
                  label: "Tech For Education",
                },
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div>
          <Steps
            style={{ height: "80%" }}
            direction="vertical"
            current={stepsValue}
            items={[
              {
                title: "Event Title",
                description: "Give Your Event a Name",
              },
              {
                title: " Date and Location",
                description: " When is Your Event Happening ?",
              },
              {
                title: "Discription",
                description: "Tell us more about your event !",
              },

              {
                title: "Reacts & Type",
                description: "Tell us more which type of event you need !",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
