import { HybridProxy } from './NativeApiHybridProxy'
import { NativeDataChangeListener, SyncCacheProxyHandler } from './NativeApiSyncCacheProxy'

export class NativeApi {

  /**
   * 获取哪些Api的数据需要缓存。
   * @return  string[] Api的方法名数组
   */
  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: false })
  enableCacheMethodNames (): string[] {
    return []
  }

  /**
   * 系统层获取到监听器。
   * 1.系统层，保存listener
   * 2.系统层，监听系统数据变化，发生变化后，调用listener.change(methodName)即可。
   */
  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: false })
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  obtainNativeChangeListener (listener: NativeDataChangeListener | null) {
    return null
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getWindowInfo (): any {
    return ''
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getDeviceInfo (): any {
    return ''
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getSystemInfoSync (): any {
    return ''
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getSystemSetting (): any {
    return ''
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAppBaseInfo (): any {
    return ''
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAppAuthorizeSetting (): any {
    return ''
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  navigateToMiniProgram (options: any) {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setNavigationBarColor (options: any) {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getMenuButtonBoundingClientRect (): any {
    return ''
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  request (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  saveDataUrlToFile (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  copyFileToSandboxCache (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  startAccelerometer (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  stopAccelerometer (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onAccelerometerChange (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offAccelerometerChange (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  startCompass (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  stopCompass (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onCompassChange (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offCompassChange (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  startGyroscope (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  stopGyroscope (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onGyroscopeChange (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  saveImageToPhotosAlbum (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  chooseMediaAssets (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getVideoInfo (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getImageInfo (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  compressVideo (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getLocation (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  openDocument (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  login (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setNavigationStyle (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getUserInfo (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  openSetting (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  getSetting (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setKeepScreenOn (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onUserCaptureScreen (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offUserCaptureScreen (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onLocationChange (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offLocationChange (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setScreenBrightness (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getScreenBrightness (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onMemoryWarning (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offMemoryWarning (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  hideKeyboard (options?: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  onKeyboardHeightChange (options?: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offKeyboardHeightChange (options?: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  makePhoneCall (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getSavedFileList (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  removeSavedFile (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getSavedFileInfo (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  addPhoneContact (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  scanCode (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  vibrateShort (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  vibrateLong (options: any): any {
    return options
  }

  // NativeUpdateManager
  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  applyUpdate (): any {}

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  onCheckForUpdate (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  onUpdateFailed (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  onUpdateReady (options: any): any {
    return options
  }

  // NativeAContextApi
  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  createInnerAudioContext (): any {
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  innerAudioStop (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  innerAudioPlay (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: false })
  innerAudioOnPlay (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: false })
  innerAudioOnStop (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: false })
  innerAudioOnError (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: false })
  innerAudioOnEnded (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextVolume (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextVolume (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextStartTime (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextStartTime (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextPlaybackRate (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextPlaybackRate (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextPaused (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextPaused (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextObeyMuteSwitch (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextObeyMuteSwitch (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextLoop (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextLoop (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextDuration (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextDuration (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextCurrentTime (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextCurrentTime (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextBuffered (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextBuffered (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextAutoplay (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextAutoplay (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getAudioContextSrc (option: any, _: number) {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setAudioContextSrc (option: any, _: number) {
    return option
  }

  // NativeUploadFile
  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  uploadFile (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  downloadFile (options: any): any {
    return options
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  abort (option: any, _: number): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offHeadersReceived (option: any, _: number): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offProgressUpdate (option: any, _: number): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onHeadersReceived (option: any, _: number): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onProgressUpdate (option: any, _: number): any {
    return option
  }

  // NativeFileSystemManager
  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getFileManager (): any {}

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  access (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  saveFile (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  getFileInfo (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  readFile (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  readFileSync (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  openAppAuthorizeSetting (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  requestSubscribeMessage (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  closeBLEConnection (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  createBLEConnection (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getBLEDeviceCharacteristics (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getBLEDeviceRSSI (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getBLEDeviceServices (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  notifyBLECharacteristicValueChange (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onBLECharacteristicValueChange (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onBLEConnectionStateChange (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  readBLECharacteristicValue (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  setBLEMTU (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  writeBLECharacteristicValue (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  closeBluetoothAdapter (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getBluetoothAdapterState (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getBluetoothDevices (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getConnectedBluetoothDevices (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offBluetoothAdapterStateChange (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  offBluetoothDeviceFound (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onBluetoothAdapterStateChange (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  onBluetoothDeviceFound (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  openBluetoothAdapter (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  startBluetoothDevicesDiscovery (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  stopBluetoothDevicesDiscovery (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: false, autoRelease: true })
  getExecStatus (option: any): any { // 获取缓存数据
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: false })
  setStorage (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: true })
  removeStorage (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: true })
  getStorage (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: true })
  getStorageInfo (option: any): any {
    return option
  }

  // @ts-ignore
  @window.MethodChannel?.jsBridgeMode({ isAsync: true, autoRelease: true })
  clearStorage (option: any): any {
    return option
  }
}

export class ProxyChain {
  private target: any

  constructor (target: object) {
    this.target = target
  }

  // 添加一个新的Proxy处理器
  addHandler (handler: (target: any) => ProxyHandler<any>): ProxyChain {
    const h = handler(this.target)
    this.target = new Proxy(this.target, h)
    return this
  }

  // 创建并获取最终的Proxy对象
  getProxy (): any {
    return this.target
  }
}

/**
 * 链式Proxy
 * 通过[addHandler]添加ProxyHandler
 * 通过[getProxy]获取最终的target
 */
const native = new ProxyChain(new NativeApi())
  .addHandler((target) => new SyncCacheProxyHandler(target))
  // HybridProxy第一个false是默认走jsb，true是走纯js， 第二个false是不走osChannel
  .addHandler((target) => new HybridProxy(false, false, target))
  .getProxy()

export default native
