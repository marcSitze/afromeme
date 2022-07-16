import { IMediaService } from '../interfaces/media/media.service.interface';
import { CreateMediaDTO } from '../dto/media.dto';
export default class MediaService implements IMediaService {
    constructor();
    createMedia: (media: CreateMediaDTO) => Promise<import("../interfaces/models/MediaDocument").MediaDocument>;
    getMedias: () => Promise<import("../interfaces/models/MediaDocument").MediaDocument[]>;
    findOne: (query: Partial<CreateMediaDTO>) => Promise<import("../interfaces/models/MediaDocument").MediaDocument | null>;
    getMediaById: (id: string) => Promise<import("../interfaces/models/MediaDocument").MediaDocument | null>;
    updateMedia: (id: string, query: Partial<CreateMediaDTO>) => Promise<import("../interfaces/models/MediaDocument").MediaDocument | null>;
}
