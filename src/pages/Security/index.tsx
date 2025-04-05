import { BASE_URL } from "../../constant";

const styles = {
  navImg:
    "lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] md:w-[200px] md:h-[200px] w-[120px] h-[120px] object-cover object-center",
};

const Security = () => {
  return (
    <>
      <div className="hidden w-full lg:flex xl:flex flex-row items-center justify-between px-14 py-8">
        <div className="flex flex-col gap-8 items-end">
          <h1 className="text-[#98D3E4] text-6xl font-semibold neon-text">
            SECURITY
          </h1>
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
      <div className="flex w-full lg:hidden xl:hidden flex-col px-12 py-4">
        <h1 className="text-[#98D3E4] text-4xl font-semibold neon-text">
          SECURITY
        </h1>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-8 items-end basis-1/4">
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
          <div className="basis-2/5">
            <img src={BASE_URL + "/assets/security shield.gif"} alt="shield" />
          </div>
          <div className="flex flex-col gap-8 items-start basis-1/4">
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
      </div>
    </>
  );
};

export default Security;
