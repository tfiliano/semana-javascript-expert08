export default class VideoProcessor {
  #mp4Demuxer;

  /**
   *
   * @param {object} options
   * @param {import('./MP4Demuxer.js').default} mp4Demuxer
   */

  constructor({ mp4Demuxer }) {
    this.#mp4Demuxer = mp4Demuxer;
  }
  mp4Decoder(encoderConfig, stream) {}

  async start({ file, encoderConfig }) {
    const stream = file.stream();
    const fileName = file.name.split("/").pop().replace(".mp4", "");

    debugger;
  }
}
