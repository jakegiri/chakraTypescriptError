interface Props {
  withCTABanner?: boolean;
}

export default function Footer({ withCTABanner = false }: Props) {
  return (
    <>
      <p>{withCTABanner && "hahahhha"}</p>
      <p>Footerrr</p>
    </>
  );
}
