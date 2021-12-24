// style
import bookmarkStyles from 'styles/bookmark.module.css'

const Bookmark = ({ link, title, description, format }) => {
  const { bookmark_icon: icon, bookmark_cover: cover } = format

  return (
    <div className={bookmarkStyles.bookmark} key={title}>
      <div>
        <div style={{ display: 'flex' }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={bookmarkStyles.bookmarkContentsWrapper}
            href={link}
          >
            <div role="button" className={bookmarkStyles.bookmarkContents}>
              <div className={bookmarkStyles.bookmarkInfo}>
                <div className={bookmarkStyles.bookmarkTitle}>{title}</div>
                <div className={bookmarkStyles.bookmarkDescription}>
                  {description}
                </div>
                <div className={bookmarkStyles.bookmarkLinkWrapper}>
                  <img
                    src={icon}
                    alt="favicon.ico"
                    width="16px"
                    height="16px"
                    className={bookmarkStyles.bookmarkLinkIcon}
                  />
                  <div className={bookmarkStyles.bookmarkLink}>{link}</div>
                </div>
              </div>
              <div className={bookmarkStyles.bookmarkCoverWrapper1}>
                <div className={bookmarkStyles.bookmarkCoverWrapper2}>
                  <div className={bookmarkStyles.bookmarkCoverWrapper3}>
                    <img
                      src={cover}
                      alt=""
                      width="100%"
                      height="100%"
                      className={bookmarkStyles.bookmarkCover}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bookmark
