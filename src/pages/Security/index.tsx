import { BASE_URL } from "../../constant";

const styles = {
  navImg: "w-[200px] h-[200px] object-cover object-center",
};

const Security = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between px-14 py-8">
      <div className="flex flex-col gap-8 items-end">
        <h1 className="text-[#98D3E4] text-6xl font-semibold">SECURITY</h1>
        <img
          src={BASE_URL + `/assets/security open source img.svg`}
          alt="anti bot"
          className={styles.navImg}
        />
        <img
          src={BASE_URL + `/assets/security kyc image.svg`}
          alt="anti bot"
          className={styles.navImg}
        />
        <img
          src={BASE_URL + `/assets/security antibot image.svg`}
          alt="anti bot"
          className={styles.navImg}
        />
      </div>
      <div className="">
        <img src={BASE_URL + "/assets/security shield.gif"} alt="shield" />
      </div>
      <div className="flex flex-col gap-8 items-start">
        <div className="h-8"></div>
        <img
          src={BASE_URL + `/assets/security antiwhale image.svg`}
          alt="anti bot"
          className={styles.navImg}
        />
        <img
          src={BASE_URL + `/assets/security multisig image.svg`}
          alt="anti bot"
          className={styles.navImg}
        />
        <img
          src={BASE_URL + `/assets/security auditimage.svg`}
          alt="anti bot"
          className={styles.navImg}
        />
      </div>
    </div>
  );
};

export default Security;
