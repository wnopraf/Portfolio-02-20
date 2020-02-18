import ResponisveMenu from '../components/ResponisveMenu'
import ResponsiveMenuHr from '../components/ResponsiveMenuHr'
import Letters from '../components/Letters'

export default () => {
  return (
    <>
      <header className="">
        <div className="container mx-auto">
          <Letters name="Rafael Prieto" />
        </div>
        <ResponsiveMenuHr />
      </header>
    </>
  )
}
