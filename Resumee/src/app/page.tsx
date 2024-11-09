import Image from "next/image";
import abc from "../app/image/abc.jpeg";

export default function Home() {
  return (
    <div className="h-screen bg-[#637A9F]">
      <title>M.Ibrahim Resume</title>
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <div style={styles.profileContainer}>
          {/* Profile Picture */}
          <Image
            src={abc}
            alt="Profile Picture"
            width={120}
            height={120}
            style={styles.profileImage}
          />
          <h2 style={styles.name} className="antialiased hover:text-teal-300 duration-300">Muhammad Ibrahim Mubashir</h2>
          <p style={styles.email} className="antialiased hover:text-teal-300 duration-300">muhammadibrahimmubashir.2010@gmail.com</p>
          <p style={styles.phone} className="antialiased hover:text-teal-300 duration-300">0344-2662662</p>
        </div>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <section style={styles.section}>
          <div className="font-extrabold">
          <h2>★ <u>Education:-</u></h2>
          </div>
          <div className="font-semibold">
          <p>▪ Montessori</p>
          </div>
          <p>Mariam Child Development Centre (2014-2016)</p>
          <div className="font-semibold">
          <p>▪ Habib Public School</p>
          </div>
          <p>Computer Science Student (2016-2026)</p>
        </section>

        <section style={styles.section}>
        <div className="font-extrabold">
          <h2>★ <u>Skills</u></h2>
        </div>
          <div style={styles.skillsContainer}>
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js"].map((skill) => (
              <span key={skill} style={styles.skillBadge}>{skill}</span>
            ))}
          </div>
        </section>

        <section style={styles.section}>
        <div className="font-extrabold">
          <h2>★ <u>Work Experience:-</u></h2>
          </div>
          <div className="font-semibold">
          <p>▪ TypeScript Developer</p>
          </div>
          <p>MIM Company (2022 - 2023)</p>
          <p>I worked on building web apps, APIs, and backend services with TypeScript for reliable code.</p>
          <div className="font-semibold">
          <p>▪ Web Developer</p>
          </div>
          <p>(2024 - Present)</p>
          <p>Developed responsive websites for various clients using web technologies.</p>
        </section>
      </div>
    </div>
    </div>
  );
}

// Styles (inline for simplicity)
const styles = {
  container: {
    display: "flex",
    fontFamily: "Arial, sans-serif",
  },
  leftSection: {
    margin:"15px",
    width: "28%",
    backgroundColor: "#0B192C",
    color: "#fff",
    padding: "40px",
    textAlign: "center",
    height:"600px"
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "1.5em",
    fontWeight: "bold",
    marginBottom:"15px",
  },
  email: {
    fontSize: "0.9em",
    margin: "5px 0",
    marginBottom:"15px",
  },
  phone: {
    fontSize: "0.9em",
    margin: "5px 0",
  },
  button: {
    marginTop: "15px",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#0056b3",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  rightSection: {
    width: "75%",
    padding: "20px",
    color: "#333",
  },
  section: {
    marginBottom: "20px",
  },
  skillsContainer: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  skillBadge: {
    backgroundColor: "#0B192C",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "0.9em",
  },
};

